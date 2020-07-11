const popUpPage = document.querySelector('.all-work')
const cancelPopUpPage = document.querySelector('.all-work__close')
const backdrop = document.querySelector('.backdrop')

const seeMoreBtn = document.querySelector('.works__link')
seeMoreBtn.addEventListener('click', () => {
    popUpPage.style.visibility = 'visible'
    popUpPage.style.opacity = '1'
    popUpPage.style.top = '50%'
    backdrop.style.display = 'block'
})
cancelPopUpPage.addEventListener('click', () => {
    popUpPage.style.visibility = 'hidden'
    popUpPage.style.opacity = '1'
    popUpPage.style.top = '150%'
    backdrop.style.display = 'none'
})


class Works {
  constructor(img) {
    this.image = img;
  }
}

class WorkItems {
    constructor (designs) {
        this.design = designs
    }

    render () {
        const list = document.createElement('li')
        list.className = 'all-work__listItem'
        list.innerHTML = `
        <img src="img/${this.design.image}" alt="photo" class="all-work__image">
        <a href="img/${this.design.image}" class="all-work__link">VIEW</a>
        `
        return list
    }
}
class WorkLists {
    works = [
        new Works('works-1.jpg'),
        new Works('works-2.jpg'),
        new Works('works-3.jpg'),
        new Works('works-4.jpg'),
        new Works('works-5.jpg'),
        new Works('works-6.jpg'),
        new Works('works-7.jpg'),
        new Works('works-8.jpg'),
        new Works('works-9.jpg'),
        new Works('works-10.jpg'),
        new Works('works-11.jpg'),
        new Works('works-12.jpg'),
        new Works('works-13.jpg'),
        new Works('works-14.jpg')
    ];
    
    render () {
        const allWork = document.querySelector('.all-work__list')
        for (const items of this.works) {
            const workItems = new WorkItems(items)
            const worklist = workItems.render()
            allWork.append(worklist)
        }   
    }
}
const workLists = new WorkLists()
workLists.render()

const header = document.querySelector('header')
const sectionAbout = document.querySelector('.about')
const sectionWorks = document.querySelector('.works')
const sectionServices = document.querySelector('.services')
const navigationBtn = document.querySelector('.navigation__button')

const getById = (element) => {
    
    return document.getElementById(element)
    
}

const link1 = getById('link1')
const link2 = getById('link2')
const link3 = getById('link3')
const link4 = getById('link4')

const scrollToViewAnimation = (button, element) => {
    button.addEventListener('click', () => {
        if (button === link1) {
            navigationBtn.style.backgroundColor = '#d62e2e'
        } else if (button == link2) {
            navigationBtn.style.backgroundColor = '#d68d2e'
        }
        else if (button == link3) {
            navigationBtn.style.backgroundColor = '#bfc22f'
        }
        else if (button == link4) {
            navigationBtn.style.backgroundColor = '#c29026'
        }
        element.scrollIntoView({behavior: 'smooth'})
    })
}

scrollToViewAnimation(link1, header)
scrollToViewAnimation(link2, sectionAbout)
scrollToViewAnimation(link3, sectionServices)
scrollToViewAnimation(link4, sectionWorks)
scrollToViewAnimation(link5, header)
scrollToViewAnimation(link6, sectionAbout)
scrollToViewAnimation(link7, sectionServices)
scrollToViewAnimation(link8, sectionWorks)


/////////////////////SOCIAL MEDIA LINKS//////////////////
const socialMediaLinksHandler = (id, href) => {
    const link = document.getElementById(id)
    link.addEventListener('click', () => {
        location.href = href
    })
}
socialMediaLinksHandler("facebookLogo", "https://www.facebook.com/daniel.olaoluwa.779")
socialMediaLinksHandler("instagramLogo", "https://www.instagram.com/prof.dharnyel.01")
socialMediaLinksHandler("twitterLogo", "https://www.twitter.com/DanielOlaoluw13")


/////////////////CONTACT US//////////////
// const contactUs = document.querySelector('.header__btn')
// contactUs.addEventListener('click', () => {
//     location.href = "https://danieloluwa16@gmail.com"
// })