import data from "../feed/sample.json"

export function filterData(type) {
    const filterdata = data.entries.filter((val) => {
        if (val.releaseYear >= 2010 && val.programType === type) {

            return val;
        }
    })
    return filterdata


}

export function SortFilterdata(filterdata) {
    const sortTitle = filterdata.map((valu) => {
        return valu.title
    }).sort()
    let temp = []
    sortTitle.map((v) => {
        filterdata.map((val, ind) => {
            if (v === val.title) {
                temp.push(val)
            }

        })

    })

    return temp.slice(0,20)


}

export function searchbyTitle(data,event) {
    let temp = []
    data.map((value) => {
        if (value.title) {
            if (value.title.indexOf(event) > -1) {
                temp.push(value)
            }
        }
    })
    return temp


}