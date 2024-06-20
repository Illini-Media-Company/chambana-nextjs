export default function rearrangeStories(stories) {
    var index = 0;
    var found = false;
    for (let i = 0; i < stories.length; i++) {
        if (stories[i].main) {
            found = true;
            index = i;
            break;
        }
    }

    if (index == 0 || !found)
        return(stories);

    var temp = stories[0];
    stories[0] = stories[index];
    stories[index] = temp;

    stories.sort((a, b) => {
        if (a !== stories[0] && b !== stories[0]) { // Check if there are not first element
            return new Date(b.publishedAt) - new Date(a.publishedAt)
        }
    })

    return stories;
}