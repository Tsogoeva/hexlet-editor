/* eslint-disable no-useless-constructor */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSnippetDto } from './dto/create-snippet.dto';
import { UpdateSnippetDto } from './dto/update-snippet.dto';
import { Snippets } from './snippet.entity';

@Injectable()
export class SnippetsService {
  constructor(
    @InjectRepository(Snippets)
    private snippetsRepository: Repository<Snippets>,
  ) {}

  async findOne(id: number): Promise<Snippets> {
    return this.snippetsRepository.findOneBy({ id });
  }

  async create(createSnippetDto: CreateSnippetDto): Promise<Snippets> {
    const snippet = new Snippets();
    snippet.code = createSnippetDto.code;
    return this.snippetsRepository.save(snippet);
  }

  async update(
    id: number,
    updateSnippetDto: UpdateSnippetDto,
  ): Promise<Snippets[]> {
    await this.snippetsRepository.update(id, updateSnippetDto);
    return this.snippetsRepository.find();
  }

  async delete(id: number): Promise<void> {
    await this.snippetsRepository.delete(id);
  }

  findAll(): Promise<Snippets[]> {
    return this.snippetsRepository.find();
  }
}
