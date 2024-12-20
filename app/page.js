import Image from "next/image";
import styles from "./page.module.css";
import Page1 from "@/components/Page1/Page1";

export default function Home() {
  return (
    <div>
      <div className={styles.textmain}>
            <Page1/>
        </div>
    </div>
  );
}
