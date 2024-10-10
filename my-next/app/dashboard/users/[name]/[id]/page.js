export default function Page({params}){

    return(
        <div>
        <h1>Welcome {params.name}</h1>
        <h2>Your Id is : {params.id}</h2>
        </div>
    )
}