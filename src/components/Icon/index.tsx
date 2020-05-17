import React from "react";

import {ReactComponent as AgoraGloboIcon} from "../../assets/icons/agoraglobo.svg"
import {ReactComponent as HomeIcon} from "../../assets/icons/home.svg"
import {ReactComponent as AccountIcon} from "../../assets/icons/account.svg"
import {ReactComponent as CategoriesIcon} from "../../assets/icons/categories.svg"
import {ReactComponent as SearchIcon} from "../../assets/icons/search.svg"

interface IIcons {
  name?: string,
  children?: any
}

const Icon = (props: IIcons) => {
  switch(props.name){
    case "busca":
      return <SearchIcon/>
    case "inicio":
      return <HomeIcon/>
    case "agora-na-globo":
      return <AgoraGloboIcon/>
    case "categorias":
      return <CategoriesIcon/>
    case "minha-conta":
      return <AccountIcon/>
    default:
       return <></>
  }
}

export default Icon;
