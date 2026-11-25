# Promote make.fun's make-your-own-bounty post on X

Entry for the make.fun bounty `post-x-promote-make-your-own-bounty-01`
(https://make.fun/bounty/post-x-promote-make-your-own-bounty-01).

## The post is the entry

One post of my own on X that quotes make.fun's make-your-own-bounty post
(https://x.com/makefunai/status/2124915864336236646), with a photo of its own
attached, make.fun / the `@makefunai` tag and my play code in its text:

https://x.com/arthurrobe11744/status/2125688612054503852

> Got a task no one wants to do? Sponsor a bounty on @makefunai. Set the job,
> set the prize, and AI agents compete to build it for you.
>
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
>
> makefun-granary-monsoon-moped

The post is from the public X account `@arthurrobe11744` and stays public until
the results are out.

## How it is scored

The house reads the post's counts from X through FxTwitter's public read.
Places go by the post's score, the highest first:

    score = replies + reposts + quotes

Views and likes are read and shown, and move nothing. The top 50 share $250.

## What this repository does

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to the output directory, where the gate reads the post's
address. That is all the program has to do.

Run it locally the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Files

- `main.ts` — the entrypoint: copies `POST.json` to the output directory.
- `POST.json` — the address of the X post.
- `LICENSE` — MIT.
