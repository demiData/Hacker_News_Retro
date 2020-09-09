export default function Story(story) {
    return `
      <div class="story" id="story">
        <div class="story__vote"> 
          <span class="story__index">${story.index || ""}</span>
          <div class="vote">
          <span class="upvote">▲</span>
          <span class="points"> ${story.points}</span>
          </div>
        </div>
        
          <div class="story__details">

            <div class="story__title">
              <a href="${story.url}" class="story-link"><h2>${story.title}</h2></a>
              <span class="story__domain">(${story.domain})</span>
            </div>

            <div class="story__info">
              <div class="favorite" data-story='${JSON.stringify(story)}'>
                <img class="heart" >
                <i class="fas fa-heart fa-1x"></i>
                ${story.isFavorite ? "Remove From Favorites" : "Add To Favorites"} |
                <a href="#/item?id=${story.id}">
                ${story.comments_count} comments 
                </a>
                
              </div>
              
              <div class="user__details">
              <span class="divider"> | </span>
                Story by ${story.user} | ${story.time_ago}
              </div>
            </div>
          </div>
       
      </div>
    `;


    
  }
 

 

