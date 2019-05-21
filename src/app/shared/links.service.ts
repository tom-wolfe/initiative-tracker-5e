import { Injectable } from '@angular/core';

@Injectable()
export class LinksService {
  constructor() { }

  condition(condition: string): string {
    return 'https://www.dndbeyond.com/compendium/rules/basic-rules/appendix-a-conditions#{condition}'.replace('{condition}', condition);
  }
}
