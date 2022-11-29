import {Section1} from '../../styles/form'
import Header_user from '../../components/header_user/Header_user';
import {H2} from '../../styles/header';
import {Header_Sports,Search,Button,Input, SearchBar,DivBet} from '../../styles/bet';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function BetForm(posts, setSearchResults) {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))

        setSearchResults(resultsArray)
    }

  return (
    <div>
        <Header_user/>
    <div>
        <Header_Sports>
            <NavLink style={{textDecoration:0,color:"#003001"}}><H2>Todos</H2></NavLink>
            <NavLink style={{textDecoration:0,color:"#003001"}}><H2>Futebol</H2></NavLink>
            <NavLink style={{textDecoration:0,color:"#003001"}}><H2>Basquetebol</H2></NavLink>
            <NavLink style={{textDecoration:0,color:"#003001"}}><H2>Ténis</H2></NavLink>
            <NavLink style={{textDecoration:0,color:"#003001"}}><H2>Andebol</H2></NavLink>
        </Header_Sports>
    </div>
    <DivBet>
    <SearchBar>
        <Search onSubmit={handleSubmit}>
            <Input
                type="text"
                id="search"
                onChange={handleSearchChange}
            />
                <Button className="search__button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
        </Search>
      </SearchBar>
      </DivBet>
      </div>
  )
}