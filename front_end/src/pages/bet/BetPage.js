import HeaderUser from '../../components/header_user/HeaderUser';
import {H2} from '../../styles/header';
import {HeaderSports,Search,Button,Input, SearchBar,DivBet} from '../../styles/bet';
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
        <HeaderUser/>
    <div>
        <HeaderSports>
            <NavLink style={{textDecoration:0,color:"#003001"}}><H2>Todos</H2></NavLink>
            <NavLink style={{textDecoration:0,color:"#003001"}}><H2>Futebol</H2></NavLink>
            <NavLink style={{textDecoration:0,color:"#003001"}}><H2>Basquetebol</H2></NavLink>
            <NavLink style={{textDecoration:0,color:"#003001"}}><H2>Ténis</H2></NavLink>
            <NavLink style={{textDecoration:0,color:"#003001"}}><H2>Andebol</H2></NavLink>
        </HeaderSports>
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