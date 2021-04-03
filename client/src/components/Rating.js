import styled from 'styled-components'

export default function Rating({rating, numReviews}){
    return (
        <RatingBox>
            <span>
                <i className={
                    rating >=1
                    ? "fa fa-star"
                    : rating>=0.5
                    ? "fa fa-star-half-o"
                    : 'fa fa-star-o'
                }></i>
            </span>
            <span>
            <i className={
                    rating >=2
                    ? "fa fa-star"
                    : rating>=1.5
                    ? "fa fa-star-half-o"
                    : 'fa fa-star-o'
                }></i>
            </span>
            <span>
            <i className={
                    rating >=3
                    ? "fa fa-star"
                    : rating>=2.5
                    ? "fa fa-star-half-o"
                    : 'fa fa-star-o'
                }></i>
            </span>
            <span>
            <i className={
                    rating >=4
                    ? "fa fa-star"
                    : rating>=3.5
                    ? "fa fa-star-half-o"
                    : 'fa fa-star-o'
                }></i>
            </span>
            <span>
            <i className={
                    rating >=5
                    ? "fa fa-star"
                    : rating>=4.5
                    ? "fa fa-star-half-o"
                    : 'fa fa-star-o'
                }></i>
            </span>
            <span>
                {numReviews + ' reviews'}
            </span>
        </RatingBox>
    )
}

const RatingBox = styled.div`
    span {
        color: #f0c040;
        margin: 0.1rem;
    }
    span:last-child {
        color: #404040;
  }
`

