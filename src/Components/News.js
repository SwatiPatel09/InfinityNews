import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";




export class News extends Component {

    // articles=[
    //     {
    //     "source": {
    //     "id": "the-times-of-india",
    //     "name": "The Times of India"
    //     },
    //     "author": "Bloomberg",
    //     "title": "Sky-high markets are new risk to billionaires beyond death and divorce",
    //     "description": "Even if broader declines in tech shares are contained, Zuckerberg’s losses are especially striking because he’s been a mainstay among the world’s 10 richest people since mid-2015. He nearly fell out of the Top 10 after Thursday’s rout, ranking just ahead of M…",
    //     "url": "https://economictimes.indiatimes.com/news/international/business/sky-high-markets-are-new-risk-to-billionaires-beyond-death-and-divorce/articleshow/89364470.cms",
    //     "urlToImage": "https://img.etimg.com/thumb/msid-89364455,width-1070,height-580,imgsize-36638,overlay-economictimes/photo.jpg",
    //     "publishedAt": "2022-02-05T08:30:29Z",
    //     "content": "For the worlds richest people, there used to be three ways to quickly see a fortune disappear: Death, default or divorce.\r\nThe past few months have added another risk: Sky-high valuations of giant te… [+2544 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "the-times-of-india",
    //     "name": "The Times of India"
    //     },
    //     "author": "Bharat Sharma",
    //     "title": "Fast Charging For Electric Vehicles: Visionary Tech Borrows From Smartphones",
    //     "description": "Electric vehicles (EV) are taking over the world, one tech leap at a time. A company that specialises in making tech for improving charging speeds is now betting on fast charging for electric vehicles.                        iStockFast charging for electric v…",
    //     "url": "https://www.indiatimes.com/technology/news/fast-charging-for-electric-vehicles-visionary-tech-borrows-from-smartphones-561234.html",
    //     "urlToImage": "https://im.indiatimes.in/content/2022/Feb/FBImage8-copy_61fe310971f38.jpg",
    //     "publishedAt": "2022-02-05T07:25:49Z",
    //     "content": "Electric vehicles (EV) are taking over the world, one tech leap at a time. A company that specialises in making tech for improving charging speeds is now betting on fast charging for electric vehicle… [+2058 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Carandbike.com"
    //     },
    //     "author": "Seshan Vijayraghvan",
    //     "title": "Tesla Model Y Electric SUV Spotted Testing In India Again",
    //     "description": "A test mule of the Tesla Model Y electric SUV has been spotted in India. The test mule was caught on the camera by an enthusiast in Pune, Maharashtra.",
    //     "url": "https://www.carandbike.com/news/tesla-model-y-electric-suv-spotted-testing-in-india-again-2750540",
    //     "urlToImage": "https://c.ndtvimg.com/2022-02/hh7q1kdg_tesla-model-y-electric-suv-spotted-in-india-again_625x300_05_February_22.jpg",
    //     "publishedAt": "2022-02-05T07:11:12Z",
    //     "content": "American electric vehicle marque, Tesla is currently gearing up to enter the Indian market. The company is expected to start its operations in India with either of its two most affordable models - th… [+2458 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "rt",
    //     "name": "RT"
    //     },
    //     "author": "RT",
    //     "title": "Elon Musk slams GoFundMe over protesting truckers",
    //     "description": "Elon Musk suggested that GoFundMe has “double standards” when it comes to protests in the US and Canada Read Full Article at RT.com",
    //     "url": "https://www.rt.com/news/548400-musk-canada-truckers-gofundme/",
    //     "urlToImage": "https://cdni.rt.com/files/2022.02/article/61fe1d902030271e3226ebf9.jpg",
    //     "publishedAt": "2022-02-05T06:56:56Z",
    //     "content": "Tesla and SpaceX CEO Elon Musk tweeted a meme on Saturday, calling US-based fundraising platform GoFundMe “professional thieves.”\r\nMusk also posted a screenshot of the platform’s 2020 tweet promoting… [+2369 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Livemint"
    //     },
    //     "author": "Livemint",
    //     "title": "Teen who tracks Elon Musk's jet movements wants a Tesla to stop following him",
    //     "description": "Mr. Sweeney’s Twitter account, @ElonJet, has amassed nearly 350,000 followers.",
    //     "url": "https://www.livemint.com/companies/news/teen-who-tracks-elon-musk-s-jet-movements-wants-a-tesla-to-stop-following-him-11644036934836.html",
    //     "urlToImage": "https://images.livemint.com/img/2022/02/05/600x338/FILES-US-AUTOMOBILE-EARNINGS-TESLA-0_1644042699282_1644042707798.jpg",
    //     "publishedAt": "2022-02-05T06:42:24Z",
    //     "content": "Jack Sweeney, 19, a freshman at the University of Central Florida in Orlando, has made a hobby out of following the private jets belonging to billionaire entrepreneurs and even some celebrities.\r\nUsi… [+1123 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Seeking Alpha"
    //     },
    //     "author": "MangoTree Analysis",
    //     "title": "Twitter: An Asymmetric Risk-Reward Bet Poised For Outperformance",
    //     "description": "Twitter’s direct response advertising and potential subscriptions to drive future revenue growth. Check out why we’re upgrading TWTR from a Hold to a Buy rating.",
    //     "url": "https://seekingalpha.com/article/4484616-twitter-asymmetric-risk-reward-poised-outperformance",
    //     "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1279846465/image_1279846465.jpg?io=getty-c-w750",
    //     "publishedAt": "2022-02-05T06:16:18Z",
    //     "content": "Michael Vi/iStock Editorial via Getty Images\r\nPremise - Twitter Is On The Verge of a Paradigm Shift And Wall Street Is Asleep\r\n If you're reading this heading, you have likely heard this story before… [+19402 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "the-wall-street-journal",
    //     "name": "The Wall Street Journal"
    //     },
    //     "author": "Ginger Adams Otis",
    //     "title": "Teen Who Tracks Elon Musk’s Private Jet On Twitter Spurns Cash Offer, Wants a Tesla in Exchange for Stopping",
    //     "description": "Teen Who Tracks Elon Musk’s Private Jet On Twitter Spurns Cash Offer, Wants a Tesla in Exchange for Stoppingwsj.com",
    //     "url": "https://www.wsj.com/articles/teen-who-tracks-elon-musks-private-jet-on-twitter-spurns-cash-offer-wants-a-tesla-in-exchange-for-stopping-11644022545",
    //     "urlToImage": "https://images.wsj.net/im-480390/social",
    //     "publishedAt": "2022-02-05T05:55:03Z",
    //     "content": "A college freshman who is publicly tracking the whereabouts of\r\nElon Musks\r\nprivate jet has one request that would make him halt the endeavor. A new Tesla Model 3. Jack Sweeney, a 19-year-old Univers… [+3941 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Livemint"
    //     },
    //     "author": "Livemint",
    //     "title": "Tesla will have to be 'vocal for local' if they need tax sops in India: Official",
    //     "description": "Import duty in India is 25 to 100 per cent on completely built unit (CBU) vehicles.",
    //     "url": "https://www.livemint.com/companies/news/tesla-will-have-to-be-vocal-for-local-if-they-need-tax-sops-in-india-official-11644037271942.html",
    //     "urlToImage": "https://images.livemint.com/img/2022/02/05/600x338/8e334d08-409c-11ec-91d6-37695f3e70ee_1639114386615_1644037500845.jpg",
    //     "publishedAt": "2022-02-05T05:09:58Z",
    //     "content": "American electric vehicle and clean energy company Tesla Inc is welcome to India if they commit to local manufacturing, assembling, and sourcing norms, a senior finance ministry official told ANI on … [+6 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Electrek"
    //     },
    //     "author": "Fred Lambert",
    //     "title": "Tesla Full Self-Driving Beta runs into a pole in what could be the first FSD accident caught on video",
    //     "description": "A Tesla vehicle using Full Self-Driving Beta has been caught on video running into a pole in what could be the first accident on the FSD Beta. Last month, Elon Musk was claiming that Tesla’s Full Self-Driving Beta had yet to have an accident in over a year in…",
    //     "url": "https://electrek.co/2022/02/04/tesla-full-self-driving-beta-crash-video/",
    //     "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/02/Tesla-FSD-Beta-accident.gif?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //     "publishedAt": "2022-02-05T04:49:54Z",
    //     "content": "A Tesla vehicle using Full Self-Driving Beta has been caught on video running into a pole in what could be the first accident on the FSD Beta.\r\nLast month, Elon Musk was claiming that Tesla’s Full Se… [+2000 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "the-hill",
    //     "name": "The Hill"
    //     },
    //     "author": "Caroline Vakil",
    //     "title": "Canadian premier calls truckers protesting COVID-19 vaccine mandate an 'occupation'",
    //     "description": "The premier of the Canadian province of Ontario denounced the truckers protesting the COVID-19 vaccine mandates and other coronavirus protocols, calling it an \"occupation\" and demanding for it to be ended....",
    //     "url": "https://thehill.com/policy/international/592949-canadian-premier-calls-canadian-truckers-protesting-covid-vaccine",
    //     "urlToImage": "https://thehill.com/sites/default/files/canadaian_flag_061821gn_lead.jpg",
    //     "publishedAt": "2022-02-05T03:14:28Z",
    //     "content": "The premier of the Canadian province of Ontario denounced the truckers protesting the COVID-19 vaccine mandates and other coronavirus protocols, calling it an occupation and demanding for it to be en… [+2122 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Los Angeles Times"
    //     },
    //     "author": "Matt Pearce, Wendy Lee",
    //     "title": "Spotify's biggest problem isn't Joe Rogan. It's ambition",
    //     "description": "Spotify wants to take over the streaming world. Joe Rogan is just a means to that end.",
    //     "url": "https://www.latimes.com/entertainment-arts/story/2022-02-04/spotify-rogan-controversy-neil-young-ek",
    //     "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/c2727e7/2147483647/strip/true/crop/6720x3528+0+476/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fe3%2F0c%2Fb881e17c4645956bdab9786ea949%2Fla-photos-1staff-873844-et-1120-spotify-new-la-campus-gem-022.jpg",
    //     "publishedAt": "2022-02-05T02:43:34Z",
    //     "content": "The source of streaming giant Spotifys latest corporate headaches began quietly, about a month ago, on TikTok.\r\nA small community of scientists, doctors and others who post educational content on Tik… [+9311 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "ABC 12 News"
    //     },
    //     "author": "Diksha Madhok",
    //     "title": "Mark Zuckerberg is in danger of losing his top 10 billionaire ranking",
    //     "description": "The historic collapse in Meta's shares this week has wiped $31 billion off Mark Zuckerberg's personal wealth, taking him down three places on Bloomberg's list of the world's richest people.",
    //     "url": "https://www.abc12.com/news/business/mark-zuckerberg-is-in-danger-of-losing-his-top-10-billionaire-ranking/article_94649cfb-12e1-5378-8199-a5993350d562.html",
    //     "urlToImage": "https://bloximages.newyork1.vip.townnews.com/abc12.com/content/tncms/assets/v3/editorial/9/3e/93e56932-e893-5427-9700-4ab2b926767e/61fd912a2fb30.image.jpg?crop=1763%2C926%2C0%2C124&resize=1200%2C630&order=crop%2Cresize",
    //     "publishedAt": "2022-02-05T01:47:35Z",
    //     "content": "The historic collapse in Meta's shares this week has wiped $31 billion off Mark Zuckerberg's personal wealth, taking him down three places on Bloomberg's list of the world's richest people.\r\nHe now s… [+1851 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "bloomberg",
    //     "name": "Bloomberg"
    //     },
    //     "author": "Natalie Obiko Pearson",
    //     "title": "GoFundMe Boots Canada Trucker Fundraiser Opposing Vaccine Rules",
    //     "description": "GoFundMe has removed a fundraiser for Canadian truckers opposing vaccine mandates from its platform, saying the campaign violates terms prohibiting the promotion of violence.",
    //     "url": "https://www.bloomberg.com/news/articles/2022-02-05/gofundme-boots-canada-trucker-fundraiser-opposing-vaccine-rules",
    //     "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iPMGVQXNHUH0/v0/1200x800.jpg",
    //     "publishedAt": "2022-02-05T01:39:10Z",
    //     "content": "GoFundMe has removed a fundraiser for Canadian truckers opposing vaccine mandates from its platform, saying the campaign violates terms prohibiting the promotion of violence.\r\nProtesters have occupie… [+1564 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "24/7 Wall St."
    //     },
    //     "author": "247chrislange",
    //     "title": "Cathie Wood’s ARK Invest Sells for 2/4",
    //     "description": "Here's a look at what the ARK Invest exchange-traded funds sold on February 4, 2022.",
    //     "url": "https://247wallst.com/investing/2022/02/04/cathie-woods-ark-invest-sells-for-2-4/",
    //     "urlToImage": "https://247wallst.com/wp-content/uploads/2020/04/imageForEntry1-Qgh.jpg",
    //     "publishedAt": "2022-02-05T01:18:20Z",
    //     "content": "Markets ended the week on a strong note with the Nasdaq pushing higher by over 1.5%. ARK Funds had a strong showing as well. ARKW performed the best out of the group, with a 6.5% gain on the day, whi… [+4509 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "24/7 Wall St."
    //     },
    //     "author": "247chrislange",
    //     "title": "Cathie Wood’s ARK Invest Buys for 2/4",
    //     "description": "Here's a look at what the ARK Invest exchange-traded funds bought on February 4, 2022.",
    //     "url": "https://247wallst.com/investing/2022/02/04/cathie-woods-ark-invest-buys-for-2-4/",
    //     "urlToImage": "https://247wallst.com/wp-content/uploads/2022/01/imageForEntry4-8Gw.jpg",
    //     "publishedAt": "2022-02-05T01:15:34Z",
    //     "content": "Markets ended out the week on a mixed note with the Nasdaq posting a gain of over 1.5% and the Dow closing just barely negative. ARK Funds had a fairly strong showing as well. ARKW performed the best… [+4975 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "CarScoops"
    //     },
    //     "author": "Sebastien Bell",
    //     "title": "More Tesla Issues As NHTSA Looking Into Rising Complaints Of Phantom Braking",
    //     "description": "The NHTSA has received more than 100 complaints of phantom braking events in the last three months",
    //     "url": "https://www.carscoops.com/2022/02/nhtsa-looking-into-rising-complaints-of-phantom-braking-in-tesla-vehicles/",
    //     "urlToImage": "https://www.carscoops.com/wp-content/uploads/2022/02/2021-Tesla-Model-3-2.jpg",
    //     "publishedAt": "2022-02-05T00:38:53Z",
    //     "content": "Complaints filed with the National Highway Traffic Safety Administration (NHTSA) of incidences of Tesla vehicles braking unexpectedly and unnecessarily are mounting and the regulator says it’s lookin… [+1892 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Tech Times"
    //     },
    //     "author": "Isaiah Richard",
    //     "title": "Tesla Global Headlamps are Customizable for Countries' Requirements; Elon Musk Says Patent 'A Bigger Win'",
    //     "description": "Big win for Tesla? This may be the first customizable headlamps for country requirements.",
    //     "url": "https://www.techtimes.com/articles/271452/20220204/tesla-global-headlamps-customizable-countries-requirements-elon-musk-patent.htm",
    //     "urlToImage": "https://1734811051.rsc.cdn77.org/data/images/full/398561/tesla-deliverables-from-2011-to-2021-from-zero-to-936-172.jpg",
    //     "publishedAt": "2022-02-05T00:20:00Z",
    //     "content": "Tesla successfully published its patent that focuses on Global Customizable Headlamps, focusing on country requirements for the vehicle to adjust when imported. The clean energy company's CEO, Elon M… [+3025 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Minneapolis Star Tribune"
    //     },
    //     "author": "Star Tribune Staff",
    //     "title": "Readers Write: Amir Locke shooting, Tesla, taxing Social Security",
    //     "description": "How were those tactics considered safe or sensical?",
    //     "url": "https://www.startribune.com/readers-write-amir-locke-shooting-tesla-taxing-social-security/600143238/",
    //     "urlToImage": "https://chorus.stimg.co/23218468/merlin_66445745.jpg?h=630&w=1200&fit=crop&bg=999&crop=faces",
    //     "publishedAt": "2022-02-04T23:45:00Z",
    //     "content": "The world has lost its mind.\r\nPolice should know by now that conducting a no-knock entry (\"Video shows fatal raid by police,\" front page, Feb. 4) before 7 a.m, with glaring lights and shouted profani… [+6702 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "CNBC"
    //     },
    //     "author": "Kevin Stankiewicz",
    //     "title": "Cramer's lightning round: I don't think Rivian will be the next Tesla",
    //     "description": "\"Mad Money\" host Jim Cramer rings the lightning round bell, which means he's giving his answers to callers' stock questions at rapid speed.",
    //     "url": "https://www.cnbc.com/2022/02/04/cramers-lightning-round-i-dont-think-rivian-will-be-the-next-tesla.html",
    //     "urlToImage": "https://image.cnbcfm.com/api/v1/image/103507374-104044814.jpg?v=1477478158",
    //     "publishedAt": "2022-02-04T23:39:27Z",
    //     "content": "Rivian: \"No, I don't think [it's going to be the next Tesla]. I think that it's going to be a very unsexy truck maker. I have to tell you, Ford has to sell its stock [in Rivian]. Why don't we buy GM?… [+853 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "the-hill",
    //     "name": "The Hill"
    //     },
    //     "author": "Saul Elbein",
    //     "title": "Uber calls for greater inner-city electric vehicle investment",
    //     "description": "Ride-hailing company Uber is urging the federal government to make greater electric vehicle (EV) investments in poorer and inner-city neighborhoods, arguing such areas should be prioritized for newer infrastructure....",
    //     "url": "https://thehill.com/policy/transportation/592928-uber-calls-for-greater-inner-city-electric-vehicle-investment",
    //     "urlToImage": "https://thehill.com/sites/default/files/article_images/electricvehicles08012021.jpg",
    //     "publishedAt": "2022-02-04T22:58:15Z",
    //     "content": "Ride-hailing company Uber is urging the federal government to make greater electric vehicle (EV) investments in poorer and inner-city neighborhoods, arguing such areas should be prioritized for newer… [+5504 chars]"
    //     }
    //     ]

    // constructor(){
    //     super();
    //     this.state={
    //         articles:this.articles,
    //         loading:false
    //     }
    // }

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalize = (Title) => {
        Title = Title.toLowerCase();
        return Title.charAt(0).toUpperCase() + Title.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            loading: true,
            totalResults: 0
        }
        document.title = `${this.capitalize(this.props.category)}- InfinityNews`;
    }
    async componentDidMount() {
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3122295d99984af4ad3779e3dd76b8f8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data=await fetch(url);
        // let parsedData=await data.json();
        // //console.log(parsedData);
        // this.setState({articles:parsedData.articles,
        //     totalResults:parsedData.totalResults,
        //     loading:false});

        this.updateNews();
    }

    async updateNews() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        //this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        //console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }

    handleOnPrevious = async () => {
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3122295d99984af4ad3779e3dd76b8f8&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data=await fetch(url);
        // let parsedData=await data.json();
        // console.log(parsedData);
        // this.setState({
        //     page:this.state.page-1,
        //     articles:parsedData.articles,
        //     loading:false
        // });
        this.setState({
            page: this.state.page - 1
        })
        this.updateNews();
    }

    handleOnNext = async () => {
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3122295d99984af4ad3779e3dd76b8f8&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data=await fetch(url);
        // let parsedData=await data.json();
        // console.log(parsedData);
        // this.setState({
        //     page:this.state.page+1,
        //     articles:parsedData.articles,
        //     loading:false
        // });
        this.setState({
            page: this.state.page + 1
        })
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        //console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading:false
        });
    }

    render() {
        return <>

            <h1 className='text-center my-3'>InfinityNews - Top {this.capitalize(this.props.category)} Headlines  </h1>
            {this.state.loading && <Spinner/>}
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem bagdeColor={this.props.bagdeColor} title={element.title ? element.title.slice(0, 45) : ""} source={element.source.name} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                </div>

                            )
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </>;
    }
}

export default News;
