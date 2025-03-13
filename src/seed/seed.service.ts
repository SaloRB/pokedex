import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  seed() {
    return `This action runs the seed service`;
  }
}
