# Next.js absolute links ISR bug

To reproduce:

1. `yarn build`
2. `yarn next start`
3. `curl http://localhost:3000/posts/pre-rendering`
4. `cat .next/server/pages/nl-nl/posts/pre-rendering.html` -> see `https://nextjs.org` link is correct
5. `curl -H "Host: example.nl" http://localhost:3000/posts/pre-rendering`
6. `cat .next/server/pages/nl-nl/posts/pre-rendering.html` -> find `http://example.nlhttps://nextjs.org`
7. `curl http://localhost:3000/posts/pre-rendering`
8. `cat .next/server/pages/nl-nl/posts/pre-rendering.html` -> correct again
