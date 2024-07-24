import Parser from 'rss-parser'

export default async function parser() {
    let parser = new Parser();

    let feed = await parser.parseURL('https://feeds.captivate.fm/wpgu-news/');

    return feed.items[0];
}