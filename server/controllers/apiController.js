import { Octokit } from 'octokit';
import 'dotenv/config';

export const apiTest = (req, res) => {
    res.status(200).send('API Test');
};

export const getRepo = async (req, res) => {
    const octokit = new Octokit({
        auth: `${process.env.TOKEN}`
    });

    let repo = await octokit.request('GET /repos/{owner}/{repo}', {
        owner: 'facebook',
        repo: 'react'
    });

    res.status(200).send(repo);
}

export const getContributors = async (req, res) => {
    const octokit = new Octokit({
        auth: `${process.env.TOKEN}`
    });

    let contributors = await octokit.request('GET /repos/{owner}/{repo}/contributors', {
        owner: "facebook",
        repo: "react"
    });

    res.status(200).send(contributors);
};

export const getUser = async (req, res) => {
    const octokit = new Octokit({
        auth: `${process.env.TOKEN}`
    });

    let user = await octokit.request('GET /users/{username}', {
        username: req.params.username
    });

    res.status(200).send(user);
}
