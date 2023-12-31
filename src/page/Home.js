import Header from '../component/Header';
import Footer from '../component/Footer';
import './Home.css'

function Home(){

    const articles = [
        {
          title: "Article 1",
          price: 10,
          isPublished: true,
        },
    
        {
          title: "Article 2",
          price: 20,
          isPublished: false,
        },
    
        {
          title: "Article 3",
          price: 30,
          isPublished: true,
        },
    
        {
          title: "Article 4",
          price: 40,
          isPublished: false,
        },
    
        {
          title: "Article 5",
          price: 50,
          isPublished: true,
        },
    
        {
          title: "Article 6",
          price: 60,
          isPublished: false,
        },
    
        {
          title: "Article 7",
          price: 70,
          isPublished: true,
        },
    
        {
          title: "Article 8",
          price: 80,
          isPublished: false,
        },
    
        {
          title: "Article 9",
          price: 90,
          isPublished: true,
        },
    
        {
          title: "Article 10",
          price: 100,
          isPublished: false,
        },
      ];

      // je dois recuperer les trois dernierws articles publides du tableau
      // recuperer les trois derniers de la nouvelle liste





  /*
    // mon code  
    const publishedArticles = articles.filter(el=>el.isPublished == true)
    const last3Articles = publishedArticles.slice(-3)
      console.log(last3Articles);

    return (
      <>
            {last3Articles.map(el=>{
              return (                    
                <p>{el.title}</p>
                )
              })}
        </>
    )
    */


    // Correction de David
    const publishedArticles = articles.filter((article) => {
      return article.isPublished === true;
    });
    // on a cree un nouveau tableau(publishedArticles) qui contien que les articles.isPublished === true
  
    const lastThreePublishedArticles = publishedArticles.slice(-3);
    // apres, on a encore cree un nouveau tableau(lastThreePublishedArticles) qui contien que les derniers trois element de dernier nouveau tableau (publishedArticles)

    return (
      <>
        <Header />
        <h1>Bienvenue A mon Blog</h1>
        <main>
          <h2>Les trois derniers articles : </h2>
          {lastThreePublishedArticles.map((article) => {
            // on va recuperer tout les elements de tableau lastThreePublishedArticles, parce qu'il a deja que les derniers 3 elements.
            // et on va recouperer au-dessus dans une article.

            return (
              <article>
                <h2>{article.title}</h2>
                <h3>{article.price}e</h3>
              </article>
            );
          })}
        </main>
        <Footer />
    </>
    );


}
export default Home


