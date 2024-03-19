import styles from "./Logo.module.scss";
import Link from "next/link";
import commonConfig from "@/database/config/metadata.json";

export default function Logo({ classVariable }) {
  return (
    <Link
      href="/"
      className={classVariable}
      aria-label={commonConfig.metadata.title}
    >
      <div class={styles.loader}>
        <div class={styles.blackhole}>
          <div class={styles.blackhole_circle}></div>
          <div class={styles.blackhole_disc}></div>
        </div>

        <div class={styles.curve}>
          <svg viewBox="0 0 500 500">
            <path
              id="loading"
              d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
            ></path>
          </svg>
        </div>
      </div>
    </Link>
  );
}
