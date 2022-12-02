import { urlConfigurationApi } from "../../api";
import { Author } from "./Author";

export const GetAuthor =async(correlationId:string):Promise<Author | null>=>{

  try {
    const {data} = await urlConfigurationApi.get<Author>(`/authors/${correlationId}`);

    if(!data)
    return null;

    return data;
    
  } catch (error) {
    console.log(`There is an error trying to get a author ${error}`);
    return null;
  }
}