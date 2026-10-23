import axios, {type AxiosResponse} from "axios";

interface Todo {
    userId: number,
    id: number,
    title: string,
    body: string
};

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log("Todo", response.data);
    } catch (err: any) {
        if(axios.isAxiosError(err)){
            console.log("Axios Error", err.message);
            if(err.response){
                console.log(err.response.status)
            };
        };
    };
};

fetchData();