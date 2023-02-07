import {Button} from '../utilsStyles';
import Link from 'next/link';

export default function EpisodeButton(){

    return(
        <Button>
            <div id='btn-wrapper'>  <Link href='/shows/all'><button>Load More Episodes</button></Link> </div>
        </Button>
    )
}