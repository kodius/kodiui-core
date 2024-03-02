import { BasicLayout } from '@/app/bible/layouts/basic-layout'
import { Bridge } from '@/components/system/bridge'
import { ErrorBoundary } from 'react-error-boundary'

const BridgePage = () => {
  return (
    <BasicLayout title="bridge">
      <Bridge href="userById">user by id</Bridge>
    </BasicLayout>
  )
}

export default BridgePage
