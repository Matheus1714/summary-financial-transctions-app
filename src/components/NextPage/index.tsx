import { ArrowRight } from '@phosphor-icons/react'
import * as S from './style'
import { NavLink, NavLinkProps } from 'react-router-dom'

interface NextPageProps extends NavLinkProps {}

export function NextPage({ ...rest }: NextPageProps) {
  return (
    <S.ContainerNextPage>
      <S.Container>
        <NavLink title="Next Page" {...rest}>
          <ArrowRight size={100} />
        </NavLink>
      </S.Container>
    </S.ContainerNextPage>
  )
}
