# abhiomkar-next

## Deploy

Push changes to GitHub for deploying to prod:

```
git commit -am "changes"
git push origin HEAD # deploys to prod
```

Preview deploy before pushing changes:

```
npx vercel
```

You can also deploy to prod without pushing to GitHub:

```
vercel --prod
```
