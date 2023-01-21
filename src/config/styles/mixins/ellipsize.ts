import { css, FlattenSimpleInterpolation } from 'styled-components';

interface Ellipsize {
  default: FlattenSimpleInterpolation;
  noOfLines: (noOfLines: number) => FlattenSimpleInterpolation;
}

export const ellipsize: Ellipsize = {
  default: css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  noOfLines: (noOfLines: number) => css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${noOfLines};
    -webkit-box-orient: vertical;
  `
};
