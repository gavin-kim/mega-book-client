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
                <div className="well review-item">
                    <h3>Rating: {review.rating}</h3>
                    <h3>- {review.reviewerName} <small>{new Date(review.reviewDate).toDateString()}</small></h3>
                    <p>{review.content}</p>
                </div>
            );
        });

        let avgRating = totalRating / list.length;

        return <div className="well review-container">
            <h2> Average Rating: {avgRating}, {list.length} reviews</h2>
            <div className="review-items">{list}</div>
        </div>;
    }
}