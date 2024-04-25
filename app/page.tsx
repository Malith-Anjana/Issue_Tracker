import Pagination from './components/Pagination'

export default function Home() {
  return (
   <main>
    <Pagination itemCount={20} currentPage={4} pageSize={5}/>
    </main>
  )
}
