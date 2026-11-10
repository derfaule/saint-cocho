/* story-grid — renders the accordion story list and wires up the parallax image.
   Classic script (works from file:// too). Usage:

     StoryGrid.mount({
       list: '#storiesGrid',                       // container for the cards
       parallax: '.sg-intro-image img',            // optional
       stories: [{ title, subtitle, content, image, youtubeUrl }]
     });

   `content` may be a string or an array of paragraphs (HTML allowed). */
(function (global) {
    'use strict';

    function extractYouTubeId(url) {
        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
            /^([a-zA-Z0-9_-]{11})$/
        ];
        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match && match[1]) return match[1];
        }
        return null;
    }

    function esc(str) {
        const el = document.createElement('div');
        el.textContent = str == null ? '' : str;
        return el.innerHTML;
    }

    function buildCard(story, index) {
        const card = document.createElement('article');
        card.className = 'sg-card';
        card.id = `story-${index + 1}`;
        card.innerHTML = `
            <h3 class="sg-card-title">${esc(story.title)}</h3>
            <p class="sg-card-subtitle">${esc(story.subtitle)}</p>
            <div class="sg-expanded">
                <div class="sg-image"></div>
                <div class="sg-text"></div>
                <div class="sg-embed"></div>
            </div>`;
        return card;
    }

    function collapse(card) {
        const content = card.querySelector('.sg-expanded');
        card.classList.remove('expanded');
        content.classList.remove('visible');
        card.querySelector('.sg-image').classList.remove('animate');
    }

    function expand(card, story) {
        const content = card.querySelector('.sg-expanded');
        card.classList.add('expanded');
        setTimeout(() => content.classList.add('visible'), 10);

        const imageDiv = card.querySelector('.sg-image');
        if (story.image) {
            imageDiv.innerHTML = `<img src="${esc(story.image)}" alt="${esc(story.title)}" loading="lazy">`;
            imageDiv.classList.add('animate');
        }

        const paragraphs = Array.isArray(story.content) ? story.content : [story.content || ''];
        card.querySelector('.sg-text').innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');

        const videoId = story.youtubeUrl && extractYouTubeId(story.youtubeUrl);
        if (videoId) {
            card.querySelector('.sg-embed').innerHTML =
                `<iframe width="100%" height="200" src="https://www.youtube.com/embed/${videoId}" title="YouTube audio player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }
        setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
    }

    function renderStories(list, stories) {
        list.innerHTML = '';
        stories.forEach((story, i) => {
            const card = buildCard(story, i);
            card.addEventListener('click', e => {
                if (e.target.closest('.sg-embed')) return;
                const wasExpanded = card.classList.contains('expanded');
                list.querySelectorAll('.sg-card.expanded').forEach(collapse);
                if (!wasExpanded) expand(card, story);
            });
            list.appendChild(card);
        });
    }

    function setupParallax(selector) {
        const img = document.querySelector(selector);
        if (!img) return;
        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const pct = maxScroll > 0 ? y / maxScroll : 0;
            const translateX = Math.sin(pct * Math.PI * 6) * 150;
            const shrink = window.innerWidth > 1024 ? Math.min(y / 500, 1) : 0;
            img.style.transform = `translateX(${translateX}px) scale(${1 - shrink * 0.65})`;
        });
    }

    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', e => {
                const target = document.querySelector(a.getAttribute('href'));
                if (!target) return;
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    function mount(config) {
        const list = document.querySelector(config.list);
        if (!list) { console.error('StoryGrid: list container not found', config.list); return; }
        renderStories(list, config.stories || []);
        if (config.parallax) setupParallax(config.parallax);
        setupSmoothScroll();
    }

    global.StoryGrid = { mount };
})(window);
