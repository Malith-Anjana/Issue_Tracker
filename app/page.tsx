import Pagination from './components/Pagination'

export default function Home({searchParams}: {searchParams: { page: string}}) {
  return (
   <main>
    <Pagination itemCount={20} currentPage={parseInt(searchParams.page)} pageSize={5}/>
    </main>
  )
}
