export class Results {
    id: string = ''
    site_id:string=''
    title:string=''
    price:number=0
    thumbnail: string = ''
    originalPrice:number=0
    categoryId:string=''
    officialStoreid:string=''
    domainId:string=''
    catalogProductId:string=''
    tags:Array<string> = []
    catalog_listing:boolean = false
    useThumbnailId:boolean=true
    offerScore:boolean=false
    offerShare:boolean=false
    matchScore:boolean=false
    winnerItemId:string=''
    melicoin:string = ''
    discounts:string = ''
    orderBackend: string = ''
}