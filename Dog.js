class Dog {
    constructor (data) {
        Object.assign(this, data)
    }

    getDogImage() {
        return this.avatar
    }

    getDogHtml() {
        const { name, age, bio } = this
        return `
            <div>
                <h1>${name}, ${age}</h1>
                <p>${bio}</p>
            </div>
        `

    }
}

export default Dog