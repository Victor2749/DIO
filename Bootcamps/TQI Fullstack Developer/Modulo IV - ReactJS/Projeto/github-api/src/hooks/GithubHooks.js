import {useContext} from "react";
import {GitHubContext} from "../Components/Providers/GitHubProvider"

const useGithub = ()=>{
    const {GitHubstate, getUser, getUserRepos, getUserStarred} = useContext(GitHubContext);

    return {GitHubstate, getUser, getUserRepos, getUserStarred};
};

export default useGithub;