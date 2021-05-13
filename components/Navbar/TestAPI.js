import fetch from 'isomorphic-unfetch';

const StargazerCount = ({ stars }) => (
    <div>
        Next.js Stars: { stars }
    </div>
)

StargazerCount.getInitialProps = async () => {
    const res = await fetch ('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count, }
}

export default StargazerCount