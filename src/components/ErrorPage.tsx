import Text from "./ui/Text.tsx";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";

const ErrorPage = () => {
    const {changeHero} = useContext(SWContext);

    useEffect(() => changeHero(''), [changeHero] )

    return <Text className={'text-center'}>O-o-ops! Something went wrong</Text>
}

export default ErrorPage;
