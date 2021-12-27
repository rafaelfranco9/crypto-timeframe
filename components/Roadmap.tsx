import React from 'react'

const Roadmap = () => {
    return (
        <section id="roadmap" className="text-secondary">
        <h2 className="text-2xl pb-2">Roadmap</h2>
        <div className="flex items-center space-x-2">
            <div className="rounded-full bg-main h-4 w-4" />
            <span><b>When 80% of bitcoin cards are sold:</b> 30% donation to bitcoin.org</span>
        </div>
        <div className="flex items-center space-x-2">
            <div className="rounded-full bg-main h-4 w-4" />
            <span><b>February 1st:</b> Launch of Etherium cards</span>
        </div>
        <div className="flex items-center space-x-2">
            <div className="rounded-full bg-main h-4 w-4" />
            <span><b>March 1st:</b> Launch of Dogecoin cards </span>
        </div>
        <div className="flex items-center space-x-2">
            <div className="rounded-full bg-main h-4 w-4" />
            <span><b>April 1st:</b> Launch of cryptocurrency cards chosen by the community</span>
        </div>
      </section>
    )
}

export default Roadmap;
