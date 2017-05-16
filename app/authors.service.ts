import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }
  getAuthors(): String[]{
    return ["Author1", "Author2", "Author3"];
  }
}
