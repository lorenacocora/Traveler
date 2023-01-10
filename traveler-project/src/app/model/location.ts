export class MyLocation{
    name?: string
    services?: string
    cost?: string
    latitude: number
    longitude: number
    type: string
    comments?: string

    constructor(name:string | undefined, services:string | undefined, cost: string | undefined, latitude: number, longitute: number, type: string, comments: string | undefined){
        this.name=name
        this.services=services
        this.cost=cost
        this.latitude=latitude
        this.longitude=longitute
        this.type=type
        this.comments=comments
    }

}