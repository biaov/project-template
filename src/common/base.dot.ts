/**
 * 分页器
 */
abstract class PagingDot {
  @IsOptional()
  @IsInt()
  current?: number

  @IsOptional()
  @IsInt()
  pageSize?: number

  @IsOptional()
  @IsBoolean()
  all?: boolean
}

export { PagingDot }
