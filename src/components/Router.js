import useNavigation from "../hooks/use-navigation";


function Router({children, to}) {
  const {currentPath} = useNavigation();
  if(currentPath === to) {
    return children
  }
}

export default Router