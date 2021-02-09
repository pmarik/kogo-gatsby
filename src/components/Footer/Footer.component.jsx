import React from 'react';
import { Link } from 'gatsby'; 
import FooterForm from './FooterForm.component'
import './footer.styles.scss';


const Footer = () => {
    return (
        <footer>
            <section className="footer-grid">
                <div className="footer-email-capture">
                    <h3>Get updated with promotions and news from Kogo</h3>
                    {/* <form>
                        <input placeholder="Sign up for emails" style={{color: "#E8114D"}}/>
                    </form> */}
                    <FooterForm/>
                </div>

                <div className="social-links"> 
                    <p className="social-title">Get Connected</p>

                    <a href="https://www.facebook.com/myapplecores/" target="_blank" rel="noreferrer">
                        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.8267 50.1405C20.7703 50.1281 20.482 50.0711 20.1861 50.0137C19.709 49.9213 19.3056 49.8232 18.418 49.5841C17.8398 49.4283 16.488 48.9824 16.0606 48.8065C12.5595 47.3656 9.93877 45.6481 7.42397 43.1464C5.0251 40.7601 2.93648 37.6101 1.8084 34.6773C1.70938 34.4198 1.60775 34.1587 1.58256 34.0971C1.51627 33.9348 1.30797 33.3106 1.13255 32.7486C0.736977 31.4812 0.436251 30.1715 0.302958 29.1356C0.277569 28.9383 0.233116 28.6385 0.204168 28.4694C0.024284 27.4185 -0.0585832 24.8699 0.0458692 23.6008C0.215744 21.5368 0.582907 19.5504 1.10208 17.8866C1.80807 15.6241 2.61794 13.8412 3.79767 11.9524C4.84451 10.2763 5.70385 9.18086 7.2492 7.55253C7.67201 7.10702 8.9408 5.9493 9.33065 5.65328C10.6595 4.64426 11.6256 3.94699 11.6949 3.94699C11.7086 3.94699 11.8373 3.86791 11.9809 3.77126C12.1246 3.6746 12.4641 3.47281 12.7355 3.32283C13.0069 3.17286 13.3241 2.99554 13.4404 2.9288C14.3337 2.4163 16.9412 1.34597 17.9568 1.07497C18.0413 1.0524 18.3296 0.973033 18.5974 0.898591C20.5674 0.350919 23.1073 0.00179959 25.1346 7.9157e-06C26.7925 -0.0014448 28.733 0.197122 30.4255 0.541468C31.0514 0.668801 31.2372 0.715863 32.2551 1.00494C34.2334 1.56677 36.5018 2.55444 38.2255 3.60453C38.9233 4.0296 40.2642 4.95806 40.847 5.41966C41.4066 5.86292 41.4867 5.93089 42.0393 6.43255C44.0008 8.21325 45.4633 9.97228 46.8116 12.1724C47.6957 13.6149 48.6201 15.5792 49.0184 16.8616C49.0578 16.9884 49.1125 17.1383 49.14 17.1947C49.1675 17.2511 49.2731 17.574 49.3748 17.9122C50.4057 21.3428 50.7098 24.9544 50.2614 28.4437C50.1495 29.3143 49.9878 30.3062 49.9109 30.5926C49.884 30.6932 49.8172 30.96 49.7627 31.1855C49.4101 32.6428 48.8603 34.2952 48.4027 35.2725C48.3017 35.4884 48.219 35.6797 48.219 35.6976C48.219 35.7593 47.2892 37.5809 47.0822 37.9247C46.4116 39.0385 45.5859 40.2499 45.0693 40.8781C44.9272 41.0508 44.6916 41.339 44.5457 41.5187C43.4905 42.8176 41.7445 44.4587 40.1797 45.6223C39.3979 46.2036 37.8142 47.1906 36.8793 47.6792C36.1 48.0864 34.3488 48.8512 33.8182 49.0161C33.6631 49.0642 33.4556 49.1354 33.3569 49.1741C33.1114 49.2706 31.9357 49.6258 31.4351 49.7547C30.557 49.9808 29.4345 50.1938 29.3608 50.1482C29.2771 50.0965 29.2886 32.7493 29.3724 32.7465C29.4076 32.7453 30.6818 32.7456 32.2038 32.7468C34.3293 32.7487 35.0001 32.7343 35.0958 32.6848C35.246 32.6071 35.2723 32.5158 35.4096 31.5954C35.6717 29.8377 36.066 27.3082 36.2645 26.1118C36.3649 25.5064 36.3697 25.2861 36.2845 25.2008C36.2366 25.1529 35.4206 25.1348 32.8291 25.124C30.9631 25.1162 29.4052 25.0987 29.3669 25.0851C29.3093 25.0645 29.3018 24.6271 29.3227 22.5112C29.3375 21.0101 29.3697 19.8777 29.4009 19.757C29.4301 19.6443 29.4797 19.4252 29.5113 19.2702C29.6434 18.6211 30.2252 17.7833 30.8355 17.3634C31.6345 16.8137 32.5124 16.6663 35.0251 16.6601C36.1104 16.6575 36.5305 16.6398 36.5753 16.595C36.6218 16.5485 36.6368 15.7745 36.6368 13.4255C36.6368 9.844 36.6865 10.1575 36.1088 10.09C35.9341 10.0696 35.6529 10.0282 35.4837 9.99812C35.3146 9.96802 34.9456 9.92073 34.6638 9.89303C34.3819 9.86534 33.7938 9.80765 33.3569 9.76485C32.4168 9.67274 29.6089 9.65732 29.132 9.74166C27.9746 9.94634 27.2031 10.145 26.6178 10.389C25.634 10.799 24.7499 11.3472 24.0449 11.9841C23.6388 12.351 22.907 13.1899 22.7784 13.436C22.7439 13.502 22.6563 13.6497 22.5837 13.7643C22.0747 14.5676 21.5337 15.9981 21.3599 17.0001C21.1625 18.1385 21.1617 18.1589 21.1607 21.6661C21.1602 23.5616 21.1425 25.1128 21.1214 25.1131C21.1002 25.1133 19.6827 25.1191 17.9714 25.1259C15.2201 25.1367 14.8505 25.1475 14.7793 25.2188C14.7074 25.2906 14.6989 25.6912 14.7015 28.9009C14.7032 31.0618 14.7237 32.5386 14.7528 32.593C14.781 32.6457 14.8891 32.6976 15.0116 32.7172C15.1272 32.7357 16.5386 32.7492 18.1479 32.7473C20.4927 32.7444 21.0823 32.7569 21.1161 32.8102C21.1394 32.8467 21.153 36.7626 21.1463 41.512C21.1342 50.1063 21.1337 50.1474 21.0317 50.1551C20.9753 50.1594 20.8831 50.1527 20.8267 50.1404V50.1405Z" fill="#E8114D"/>
                        </svg>
                    </a>

                    <a href="https://www.instagram.com/my.applecore/" target="_blank" rel="noreferrer">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.996" d="M24.9186 0.000132723C18.2886 0.021708 11.9386 2.67604 7.26557 7.37926C2.5925 12.0825 -0.0209403 18.4494 0.000126381 25.0794C0.0211829 31.7095 2.67502 38.0596 7.37787 42.733C12.0807 47.4065 18.4474 50.0204 25.0774 49.9999C31.7075 49.9793 38.0578 47.326 42.7317 42.6235C47.4055 37.921 50.0199 31.5546 49.9999 24.9245V24.9167C49.9778 18.2866 47.323 11.9369 42.6194 7.26418C37.9158 2.59148 31.5487 -0.0214561 24.9186 0.000132723V0.000132723ZM25.0001 9.66792C29.1653 9.66792 29.6852 9.68313 31.3207 9.7598C32.9522 9.83518 34.0652 10.0934 35.0426 10.4728C36.0532 10.8625 36.9066 11.3889 37.7589 12.2411C38.6098 13.0933 39.1363 13.9493 39.5273 14.9574C39.9055 15.9335 40.1636 17.0477 40.2402 18.6793C40.313 20.3148 40.3321 20.8348 40.3321 24.9999C40.3321 29.1652 40.3169 29.6853 40.2402 31.3207C40.1648 32.9523 39.9055 34.0651 39.5273 35.0425C39.1376 36.0531 38.6098 36.9067 37.7589 37.7589C36.9066 38.6099 36.0494 39.1362 35.0426 39.5272C34.0652 39.9053 32.9522 40.1634 31.3207 40.2401C29.6852 40.313 29.1653 40.3321 25.0001 40.3321C20.8349 40.3321 20.3149 40.3168 18.6794 40.2401C17.0478 40.1647 15.9362 39.9053 14.9575 39.5272C13.9482 39.1374 13.0933 38.6099 12.2411 37.7589C11.3889 36.9067 10.8638 36.0494 10.4728 35.0425C10.0934 34.0651 9.83658 32.9523 9.75992 31.3207C9.68709 29.6853 9.66792 29.1652 9.66792 24.9999C9.66792 20.8348 9.68326 20.3148 9.75992 18.6793C9.8353 17.0464 10.0934 15.9348 10.4728 14.9574C10.8625 13.948 11.3889 13.0933 12.2411 12.2411C13.0933 11.3889 13.9494 10.8638 14.9575 10.4728C15.9349 10.0934 17.0466 9.83646 18.6794 9.7598C20.3149 9.68697 20.8349 9.66792 25.0001 9.66792V9.66792ZM24.9426 12.3894C20.8425 12.3894 20.3633 12.4085 18.7343 12.466C17.2394 12.5427 16.4332 12.7918 15.8966 13.0039C15.1696 13.2709 14.67 13.6159 14.1347 14.1513C13.5968 14.6892 13.253 15.1875 12.9847 15.9157C12.7739 16.4524 12.526 17.2752 12.4481 18.7701C12.3906 20.3991 12.3702 20.8974 12.3702 24.9809C12.3702 29.063 12.3906 29.56 12.4481 31.1699C12.526 32.6647 12.7739 33.4889 12.9847 34.0256C13.253 34.7359 13.5968 35.2534 14.1347 35.7887C14.67 36.3253 15.1696 36.6511 15.8966 36.9374C16.4332 37.1482 17.2573 37.3973 18.7535 37.4753C20.3799 37.5507 20.8591 37.5699 24.9617 37.5699C29.063 37.5699 29.5422 37.5532 31.17 37.4803C32.6648 37.4127 33.4888 37.1623 34.0254 36.9528C34.7359 36.6755 35.2533 36.3433 35.7887 35.8079C36.3253 35.2688 36.6511 34.7602 36.9373 34.0422C37.1482 33.503 37.3973 32.6917 37.4753 31.1968C37.5507 29.5806 37.5697 29.0936 37.5697 24.9999C37.5697 20.9063 37.5531 20.4208 37.4803 18.8032C37.4126 17.3084 37.1622 16.497 36.9526 15.9579C36.6755 15.2398 36.3432 14.73 35.8079 14.1934C35.2687 13.658 34.7602 13.3259 34.0422 13.0486C33.503 12.8365 32.6916 12.5886 31.1968 12.5183C29.5805 12.4481 29.0925 12.4277 25.0001 12.4277L24.9426 12.3894ZM33.1848 14.9779C34.198 14.9767 35.0247 15.802 35.0247 16.8164C35.0247 17.8322 34.1993 18.6563 33.1848 18.6563C32.169 18.6563 31.3449 17.8309 31.3449 16.8164C31.3449 15.802 32.1703 14.9779 33.1848 14.9779ZM25.0001 17.127C29.3467 17.127 32.8732 20.6495 32.8732 24.9999C32.8732 29.3466 29.3505 32.873 25.0001 32.873C20.6534 32.873 17.127 29.3505 17.127 24.9999C17.127 20.6532 20.6496 17.127 25.0001 17.127V17.127ZM25.0001 19.8892C22.1764 19.8892 19.8893 22.1764 19.8893 24.9999C19.8893 27.8236 22.1764 30.1107 25.0001 30.1107C27.8237 30.1107 30.1108 27.8236 30.1108 24.9999C30.1108 22.1764 27.8237 19.8892 25.0001 19.8892V19.8892Z" fill="#E8114D"/>
                        </svg>
                    </a>

                    <a href="https://www.pinterest.com/MyApplecore/" target="_blank" rel="noreferrer">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 0C11.1862 0 0 11.1862 0 25C0 35.5856 6.56907 44.6321 15.8784 48.2733C15.6532 46.2838 15.4655 43.2808 15.9535 41.1036C16.4039 39.1516 18.8814 28.6787 18.8814 28.6787C18.8814 28.6787 18.1306 27.1772 18.1306 24.9625C18.1306 21.4715 20.1577 18.8814 22.6351 18.8814C24.7748 18.8814 25.7883 20.4955 25.7883 22.4099C25.7883 24.5495 24.4369 27.7778 23.7237 30.7432C23.1231 33.2207 24.9625 35.2477 27.4399 35.2477C31.8694 35.2477 35.2853 30.5556 35.2853 23.7988C35.2853 17.8303 30.9685 13.6261 24.8498 13.6261C17.7553 13.6261 13.5511 18.9565 13.5511 24.4745C13.5511 26.6141 14.3769 28.9414 15.4279 30.1802C15.6156 30.4429 15.6532 30.6306 15.6156 30.8934C15.4279 31.6817 15.015 33.3709 14.9399 33.7087C14.8273 34.1592 14.5646 34.2718 14.1141 34.0465C10.9985 32.5826 9.04655 28.0405 9.04655 24.3619C9.04655 16.479 14.7898 9.23423 25.5631 9.23423C34.2342 9.23423 40.9535 15.4279 40.9535 23.6486C40.9535 32.2447 35.5105 39.1892 28.003 39.1892C25.488 39.1892 23.0856 37.8754 22.2598 36.3363C22.2598 36.3363 21.021 41.1036 20.7207 42.2673C20.1577 44.4444 18.6186 47.1471 17.6051 48.8363C19.9324 49.5495 22.4099 49.9625 25 49.9625C38.8138 49.9625 50 38.7763 50 24.9625C50 11.1862 38.8138 0 25 0Z" fill="#E8114D"/>
                        </svg>
                    </a>
                </div>

                <div className="footer-nav">
                    <ul>
                        <li><Link to="/shop/">Shop</Link></li>
                        <li><Link to="/about/">About</Link></li>
                        <li><Link to="/contact/">Contact</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/wholesale/">Wholesale and Bulk Orders</Link></li>
                        <li><Link to="/refund-policy/">Refund Policy</Link></li>
                        <li><Link to="/shipping-policy/">Shipping Policy</Link></li>
                    </ul>
                </div>
            </section>
            <aside className="footer-aside">
                <div className="terms">
                    <p><Link to="/privacy-policy/">Privacy Policy</Link> | <Link to="/terms-of-service/">Terms of Service</Link></p>
                </div>
                <div className="name">
                    <p>Kogo Foods 2021</p>
                </div>
            </aside>
        </footer>
    )
}

export default Footer;