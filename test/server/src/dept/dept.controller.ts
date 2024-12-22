import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DeptService } from './dept.service';
import { CreateDeptDto } from './dto/create-dept.dto';
import { UpdateDeptDto } from './dto/update-dept.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('部门管理-DeptController')
@Controller('dept')
export class DeptController {
  constructor(private readonly deptService: DeptService) {}

  @ApiOperation({ summary: '部门新增' })
  @Post()
  create(@Body() createDeptDto: CreateDeptDto) {
    return this.deptService.create(createDeptDto);
  }

  @ApiOperation({ summary: '部门列表' })
  @Get()
  findAll() {
    return this.deptService.findAll();
  }

  @ApiOperation({ summary: '部门详情' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deptService.findOne(+id);
  }

  @ApiOperation({ summary: '部门更新' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDeptDto: UpdateDeptDto) {
    return this.deptService.update(+id, updateDeptDto);
  }

  @ApiOperation({ summary: '部门删除' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deptService.remove(+id);
  }
}
