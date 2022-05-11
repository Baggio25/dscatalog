import Link from "next/link";

import styles from "./sidebar.module.css";

export default function Sidebar() {
    
    
    return (
        <div className={styles.adminNavContainer}>
          <ul>
            <li>
              <Link href="/admin/dashboard/products">
                <a>Produtos</a>
              </Link>
            </li>
            <li>
              <Link href="/admin/dashboard/categories">
                <a>Categorias</a>
              </Link>
            </li>
            <li>
              {
                isAllowedByRole && 
              }
            </li>
          </ul>
        </div>
    )
}