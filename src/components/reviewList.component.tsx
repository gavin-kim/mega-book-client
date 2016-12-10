import * as React from "react";

export interface Review {
    id: number,
    reviewerName: string,
    reviewDate: Date,
    content: string,
    rating: number,
    bookId: number
}

export interface ReviewListProps {
    reviews: Array<Review>
}

export class ReviewList extends React.Component<ReviewListProps, {} > {
    render() {

        let totalRating = 0;
        let list = Array<any>();

        this.props.reviews.forEach(function(review) {

            totalRating += review.rating;

            list.push(
                <div className="well well-sm review-item">
                    <h5>Rating: {review.rating}</h5>
                    <div>- {review.reviewerName} <small>{new Date(review.reviewDate).toDateString()}</small></div>
                    <div>{review.content}</div>
                </div>
            );
        });

        let avg = totalRating / list.length;
        avg = Number.NaN == avg ? 0 : avg;

        return <div className="well well-sm review-container">
            <h4> Average Rating: {avg}, {list.length} reviews</h4>
            <div className="review-items">{list}</div>
        </div>;
    }
}