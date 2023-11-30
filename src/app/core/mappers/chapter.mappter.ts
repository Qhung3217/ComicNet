import { SingleChapterResponse } from '../interfaces/api-response/single-chapter-response.interface';
import { ChapterImage } from '../interfaces/base/chapter-image.interface';
import { Chapter } from '../interfaces/base/chapter.interface';

export function mapJsonToChapter(jsonData: any): Chapter {
  return {
    id: jsonData.id,
    name: jsonData.name,
  };
}
export function mapJsonArrayToChapters(jsonArray: any[]): Chapter[] {
  return jsonArray.map((jsonData) => mapJsonToChapter(jsonData));
}
export function mapJsonToChapterImage(jsonData: any): ChapterImage {
  return {
    page: jsonData.page,
    src: jsonData.src,
    backupSrc: jsonData.backup_src,
  };
}
export function mapJsonArrayToChapterImages(jsonArray: any[]): ChapterImage[] {
  return jsonArray.map((jsonData) => mapJsonToChapterImage(jsonData));
}

export function mapJsonToSingleChapterResponse(
  jsonData: any
): SingleChapterResponse {
  return {
    images: mapJsonArrayToChapterImages(jsonData.images),
    chapters: mapJsonArrayToChapters(jsonData.chapters),
    chapterName: jsonData.chapter_name,
    comicName: jsonData.comic_name,
  };
}
