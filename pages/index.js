import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useSession, signIn, signOut, providers, getCsrfToken, getSession } from "next-auth/react"





export default function Home({ csrfToken }) {
  const { data: session } = useSession()


  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <div className={styles.container}>
      <div className={styles.card + " " + styles.blur}>
        <h1 className={styles.title}>Dragões</h1>
        <div className={styles.grid + " " + styles.column}>
          <h3 className={styles.description}>Login</h3>
          <form autoComplete="off" className={styles.form} action="/api/auth/callback/credentials" method="POST" >
            <div className={styles.control}>
              <h1>Sign In</h1>
            </div>
            <div className={styles.control + " " + styles.blockCube + " " +styles.blockInput}>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <input name="username" placeholder="Username" type="text" label="Username" />
              <div className={styles.bgTop}>
                <div className={styles.bgInner}></div>
              </div>
              <div className={styles.bgRight}>
                <div className={styles.bgInner}></div>
              </div>
              <div className={styles.bg}>
                <div className={styles.bgInner}></div>
              </div>
            </div>
            <div className={styles.control + " " + styles.blockCube + " " +styles.blockInput}>
              <input name="password" placeholder="Password" type="password" label="Password" />
              <div className={styles.bgTop}>
                <div className={styles.bgInner}></div>
              </div>
              <div className={styles.bgRight}>
                <div className={styles.bgInner}></div>
              </div>
              <div className={styles.bg}>
                <div className={styles.bgInner}></div>
              </div>
            </div>
            <button className={styles.btn +" "+ styles.blockCube+" "+ styles.blockCubeHover} type="submit" >
              <div className={styles.bgTop}>
                <div className={styles.bgInner}></div>
              </div>
              <div className={styles.bgRight}>
                <div className={styles.bgInner}></div>
              </div>
              <div className={styles.bg}>
                <div className={styles.bgInner}></div>
              </div>
              <div className={styles.text}>Log In</div>
            </button>
           
          </form>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}
/* Home.getInitialProps= async(context)=>{
  const {req,res} = context
  const session = await getSession({req})

  if(session && res){
    res.writeHead(302, {
      Location:'/'
    })
    res.end()
      return
  }
  return{
    session:undefined,
    providers: await CredentialsProvider()
  }
} */
