import { Flex, Spacer } from "@chakra-ui/react"
import { Button } from "../Button"
import { PageHeader } from "../PageHeader"

interface AppToolbarProps {
  noCreateButton?: boolean
  pageTitle: string
}

const pageHeader = (title: string) => {
  return (
    <PageHeader fontWeight={'bold'} flexDirection={'column'} justifyContent={'center'}>
      {title}
    </PageHeader>
  )
}

export const AppToolbar = (props: AppToolbarProps) => {
  return (
    <Flex flexDirection={{ basa: 'row', md: 'column' }} flexWrap={'wrap'}>
      <Flex flexDirection={'column'} justifyContent={'center'} flexWrap={'wrap'} mb={{ base: 4, md: 0 }}>
        {pageHeader(props.pageTitle)}
      </Flex>

      <Spacer></Spacer>

      <Flex alignItems={'center'} gap={{ base: 2, md: 3 }} flexWrap={'wrap'}>
        {!props.noCreateButton &&
          <Button variant="info" size={'sm'}>
            Create
          </Button>
        }
      </Flex>
    </Flex>
  )
}