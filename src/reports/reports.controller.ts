import { Controller, Post, Body, UseGuards, Patch, Param } from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';
import { AuthGuard } from '../Guards/auth.guard';
import { CurrentUser } from '../users/decorators/current-user.decorators';
import { User } from '../users/user.entity';
import { ReportDto } from './dtos/report.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ApproveReportDto } from './dtos/approve-report.dto';

@Controller('reports')
export class ReportsController {
    constructor(private reportsService: ReportsService){}

    @Post()
    @UseGuards(AuthGuard)
    @Serialize(ReportDto)
    createReport(@Body() body: CreateReportDto, @CurrentUser() user: User) {
        return this.reportsService.create(body, user)
    }


    @Patch('/:id')
    approveReport(@Param('id') id:string, @Body() body: ApproveReportDto){
        return this.reportsService.changeApproval(id, body.approved)
    }

}