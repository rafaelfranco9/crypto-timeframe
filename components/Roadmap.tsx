import React from 'react'

const Roadmap = () => {
    return (
        <section id="roadmap" className="text-secondary">
        <h2 className="text-2xl pb-2">Roadmap</h2>
        <div className="flex items-center space-x-2">
            <div className="rounded-full bg-main h-4 w-4" />
            <span><b>80% of bitcoin cards sold:</b> Donation to bitcoin.org of 30% of income</span>
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
            <span><b>April 1st:</b> Launch of cards of community chosen cryptocurrency</span>
        </div>
      </section>
    )
}

export default Roadmap;
