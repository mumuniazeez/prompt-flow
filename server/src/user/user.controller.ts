import {
  Controller,
  Get,
  Body,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto, UserResponseDto } from './dto';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { ApiBearerAuth, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { GeneralOkResponseDto } from '../dto/general-response.dto';

@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Get user profile',
    description: 'Get the current logged in user profile',
  })
  @ApiOkResponse({
    type: UserResponseDto,
  })
  @Get('me')
  findOne(@GetUser('id') id: string) {
    return this.userService.getMe(id);
  }

  @ApiOperation({
    summary: 'Update user profile',
    description: 'Update the current logged in user profile',
  })
  @ApiOkResponse({
    type: UserResponseDto,
  })
  @Patch('me')
  update(@GetUser('id') userId: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(userId, updateUserDto);
  }

  @ApiOperation({
    summary: 'Delete user profile',
    description: 'Delete the current logged in user profile',
  })
  @ApiOkResponse({
    type: GeneralOkResponseDto,
  })
  @Delete('me')
  remove(@GetUser('id') id: string) {
    return this.userService.remove(id);
  }
}
