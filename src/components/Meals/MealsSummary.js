import classes from './MealsSummary.module.css';

const MealsSummary = props => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food Delivered to You</h2>
      <p>Choose your favorite meal from our grotesc list of crappy foods and let your sensations be elevated to heavens</p>
      <p>All our meals are 100% crap and will damage your immune system and your sanity</p>
    </section>
  )
}

export default MealsSummary;